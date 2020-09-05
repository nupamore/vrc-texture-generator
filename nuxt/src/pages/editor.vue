<template>
    <main>
        <h1>VRC Texture Generator</h1>
        <el-row class="images">
            <h4>Images</h4>
            <el-upload
                action="/"
                drag
                multiple
                :auto-upload="false"
                :on-change="addedImage"
                :file-list="fileList"
                list-type="picture-card"
            >
                <i class="el-icon-plus"></i>
            </el-upload>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <h4>Template</h4>
                <el-select v-model="activeTemplate" @change="changedTemplate">
                    <el-option
                        v-for="(t, index) in templates"
                        :label="t.label"
                        :key="index"
                        :value="index"
                    ></el-option>
                </el-select>
                <h4>Canvas Code</h4>
                <div id="code"></div>
            </el-col>
            <el-col :span="12">
                <h4>
                    Output
                    <el-button class="btn-render" size="small" @click="render">
                        render
                    </el-button>
                </h4>
                <div class="canvas-wrapper">
                    <canvas
                        id="canvas"
                        ref="canvas"
                        width="4096px"
                        height="4096px"
                    ></canvas>
                    <div class="canvas-error" v-if="errorMessage">
                        {{ errorMessage }}
                    </div>
                </div>
            </el-col>
        </el-row>
    </main>
</template>

<script>
import templates from '@/assets/js/templates'
import CodeFlask from 'codeflask'

export default {
    data() {
        return {
            flask: null,
            canvas: null,
            ctx: null,
            templates,
            activeTemplate: 0,
            fileList: [],
            images: [],
            errorMessage: '',
        }
    },
    methods: {
        async addedImage(_, files) {
            this.fileList = files
            this.draw(this.flask.getCode())
        },
        changedTemplate(index) {
            const { code } = this.templates[index]
            this.flask.updateCode(code)
        },
        async draw(code) {
            // load images
            if (this.fileList.length !== this.images.length) {
                const loadImages = this.fileList.map(
                    blob =>
                        new Promise((resolve, reject) => {
                            const img = new Image()
                            img.src = blob.url
                            img.filename = blob.name
                            img.onload = () => resolve(img)
                        }),
                )
                this.images = await Promise.all(loadImages)
            }
            // draw canvas
            this.ctx.save()
            this.ctx.beginPath()
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            try {
                const func = new Function(
                    'CANVAS_WIDTH',
                    'CANVAS_HEIGHT',
                    'CTX',
                    'IMAGES',
                    code,
                )
                func(
                    this.canvas.width,
                    this.canvas.height,
                    this.ctx,
                    this.images,
                )
                this.errorMessage = ''
            } catch (e) {
                console.error(e)
                this.errorMessage = e
            }
            this.ctx.restore()
        },
        render() {
            const dataUrl = this.canvas.toDataURL('image/png')
            window.open().document.write(`<img src="${dataUrl}">`)
        },
    },
    mounted() {
        // canvas
        this.canvas = this.$refs['canvas']
        this.ctx = this.canvas.getContext('2d')
        // flask
        this.flask = new CodeFlask('#code', { language: 'js' })
        this.flask.onUpdate(this.draw)
        this.flask.updateCode(this.templates[0].code)
    },
}
</script>

<style lang="scss">
@import '@/assets/style/editor.scss';
</style>
