<template>
    <div class="home-wrapper">
        <el-dialog
                title="个人信息设置"
                :visible.sync="dialogVisible"
                width="40%"
                :before-close="handleClose">
                <hr>
                <div class="dialog-main">
                    <div class="dialog-img">
                        <h4>修改头像:</h4>
                        <img src="../../assets/silly_dog.png" alt="">
                    </div>
                    <div class="dialog-input">
                        <h4>修改密码:</h4>
                        <el-form>
                            <el-input placeholder="旧密码"></el-input>
                            <el-input placeholder="新密码"></el-input>
                        </el-form>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
        <div class="home-window">
            <el-row>
                <el-col :span="2">
                    <div class="home-sidebar">
                        <div class="sidebar-top">
                            <img src="../../assets/silly_dog.png" alt="傻狗" @click="dialogVisible = true">
                        </div>
                        <div class="sidebar-bottom">
                            <i class="iconfont icon-xiaomao"></i>
                            <i class="iconfont icon-app"></i>
                            <i class="iconfont icon-dashang"></i>
                            <i class="iconfont icon-guanyu-"></i>
                            <i class="iconfont icon-shezhi1-copy"></i>
                            <i class="iconfont icon-tuichu"></i>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="home-friends">

                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="home-dialog">

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import '../../iconfont/iconfont.css'
  export default {
    name: "index",
    data(){
      return{
        dialogVisible: false
      }
    },
    methods:{
      handleClose() {
        this.dialogVisible = false
      }
    }
  }
</script>

<style scoped lang="scss">
.home-wrapper{
    height: 100vh;
    background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog-main{
        div{
            margin-top: 15px;
            img{
                width: 80px;
                height: 80px;
                margin-top: 15px;
            }
            img:hover{
                cursor: pointer;
                filter: blur(2px);
            }
        }
    }
    .home-window{
        width: 70%;
        height: 80%;
        box-shadow:rgba(0,0,0,0.1) 0 0 55px 15px ;
        border-radius: 10px;
        .home-sidebar{
            display: flex;
            flex-direction: column;
            height: 100%;
            background-color:#2FA2E2 ;
            border-radius: 10px 0 0 10px;
            .sidebar-top{
                height: 160px;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width:60px;
                    height:60px;
                    border-radius: 50%;
                    cursor: pointer;
                }
            }
            .sidebar-bottom{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                i{
                    font-size: 25px;
                    color: rgba(230,230,230,0.8);
                }
                i:hover{
                    cursor: pointer;
                    color: rgba(230,230,230,1);
                }
            }
        }
    }
}
/deep/.el-row{
    height: 100%;
}
/deep/.el-col{
    height: 100%;
}
</style>
