<template>
    <div>
        <iframe :style="styles" :src="source" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        name: "GoogleForm",
        props: {
            type: {
                required: true,
                type: String
            }
        },
        computed: {
            source: function () {
                switch(this.type) {
                    case 'takeaway':
                        return 'https://docs.google.com/forms/d/e/1FAIpQLSd1zq8vseXmaiABAEZAE826nYJJum9-eE96F6cf0D4ldiRQLw/viewform';
                    case 'delivery':
                        return 'https://docs.google.com/forms/d/1b45vWFV_3mPlW07nFoaAH_GQSfzma8u5-ZO_AnDc13c/edit';
                    case 'supplier':
                        return 'https://docs.google.com/forms/d/19ezYuPkXIktpI5komA80ddhWtsS9FC6UgAlA3p_3ld0/edit';
                    case 'personnel':
                        return 'https://docs.google.com/forms/d/12qXlyPsQh4GkvQ98YWWwKwscXehCWZ_CQcfDZf3a5rw/edit';
                    case 'waiter':
                        return 'https://docs.google.com/forms/d/1b45vWFV_3mPlW07nFoaAH_GQSfzma8u5-ZO_AnDc13c/edit';
                    default:
                        return null;
                }
            },
            styles: () => {
                return {
                    'min-height': `800px`
                    //'min-height': `${window.document.body.scrollHeight - 180}px`
                };
            }
        }
    }
</script>

<style scoped>
    iframe {
        padding-top: 15px;
        width: 100%;
    }
</style>
