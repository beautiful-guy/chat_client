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
                            <el-input placeholder="旧密码" v-model="adminData.oldPassword"></el-input>
                            <el-input placeholder="新密码" v-model="adminData.newPassword"></el-input>
                        </el-form>
                        <div class="input-fork">
                            <i class="iconfont icon-chahao" @click="resetOld"></i>
                            <i class="iconfont icon-chahao othericon" @click="resetNew"></i>
                        </div>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
        </el-dialog>
        <div class="home-window" >
            <el-row>
                <el-col :span="2">
                    <div class="home-sidebar">
                        <div class="sidebar-top">
                            <img src="../../assets/silly_dog.png" alt="傻狗" @click="dialogVisible = true">
                        </div>
                        <div class="sidebar-bottom">
                            <el-tooltip class="item" effect="dark" :open-delay="100" content="源码" placement="right-start">
                                <i class="iconfont icon-xiaomao"></i>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :open-delay="100" content="下载APP" placement="right-start">
                            <i class="iconfont icon-app"></i>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :open-delay="100" content="打赏" placement="right-start">
                            <i class="iconfont icon-dashang"></i>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :open-delay="100" content="关于" placement="right-start">
                            <i class="iconfont icon-guanyu-"></i>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :open-delay="100" content="设置" placement="right-start">
                            <i class="iconfont icon-shezhi1-copy"></i>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" :open-delay="100" content="退出登录" placement="right-start">
                            <i class="iconfont icon-tuichu"></i>
                            </el-tooltip>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="home-friends">
                        <div class="search-box">
                            <i class="iconfont icon-fangda"></i>
                            <input v-if="other" type="text" placeholder="搜索群组/用户" @focus="importing">
                            <input v-if="isImport" class="otherInput" type="text" placeholder="搜索群组/用户">
                            <i class="iconfont icon-jiahao"></i>
                        </div>
                        <div class="tabBox" v-if="isImport">
                            <el-tabs stretch v-model="activeName">
                                <el-tab-pane label="全部" name="first">没有搜到内容，换个关键字试试吧～</el-tab-pane>
                                <el-tab-pane label="用户" name="second">没有搜到内容，换个关键字试试吧～</el-tab-pane>
                                <el-tab-pane label="群组" name="third">没有搜到内容，换个关键字试试吧～</el-tab-pane>
                            </el-tabs>
                            <div class="btn">
                                <el-button type="primary" size="small" @click="quited">退出</el-button>
                            </div>
                        </div>
                        <div class="myFriends">
                            <div class="avatar">
                                <img src="../../assets/silly_dog.png" alt="">
                            </div>
                            <div class="speaking">
                                <span>fiora</span>
                                <p>碎碎酱:说...</p>
                            </div>
                            <div class="times">20:00</div>
                        </div>
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
    import '../../iconfont/someIcon.css'
  export default {
    name: "index",
    data(){
      return{
        dialogVisible: false,
        activeName:'first',
        isImport:false,
        other:true,
        adminData:{
          oldPassword:'',
          newPassword:''
        }
      }
    },
    methods:{
      handleClose() {
        this.dialogVisible = false
        this.isImport = false
      },
      importing(){
        this.isImport = true
      },
      quited(){
        this.isImport = false
      },
      resetOld(){
        this.adminData.oldPassword = ''
      },
      resetNew(){
        this.adminData.newPassword = ''
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
            position: relative;
            img{
                width: 80px;
                height: 80px;
                margin-top: 15px;
            }
            img:hover{
                cursor: pointer;
                filter: blur(2px);
            }
            .input-fork{
                position: absolute;
                top: 22px;
                right: 3px;
                cursor: pointer;
                .icon-chahao{
                    font-size: 26px;
                }
            }
            .othericon{
                position: absolute;
                top: 55px;
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
                    user-select: none;
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
        .home-friends{
            height: 100%;
            /*border: 1px solid red;*/
            background-color: #6FBBEC;
            /*filter: blur(2px);*/
            position: relative;
            .search-box{
                height: 60px;
                line-height: 60px;
                .icon-fangda{
                    font-size: 25px;
                    position: absolute;
                    left: 22px;
                    top: 1px;
                    opacity: 0.6;
                    z-index: 1000;
                }
                input{
                    width: 180px;
                    height: 20px;
                    border-radius:18px;
                    padding: 10px 20px 10px 30px ;
                    outline: none;
                    border: none;
                    background-color: #BBDFF3;
                    opacity: .6;
                    margin-left: 20px;
                }
                .otherInput{
                    width: 230px;
                    background-color: #fff;
                    opacity: 1;
                    position: absolute;
                    top: 12px;
                    left: 0;
                    z-index: 998;
                }
                .icon-jiahao{
                    font-size: 35px;
                    position: absolute;
                    top: 2px;
                    right: 22px;
                    color: #BBDFF3;
                    cursor: pointer;
                }
                .icon-jiahao:hover{
                    color: #fff;
                }
            }
            .tabBox{
                background-color: #fff;
                width: 80%;
                height: 150px;
                padding: 0 10px;
                border-radius: 8px 8px 0 0;
                position: absolute;
                top: 60px;
                left: 20px;
                opacity: .9;
                .btn{
                    margin-left: 180px;
                }
            }
            .myFriends{
                height: 100px;
                color: rgba(256,256,256,.6);
                font-size: 12px;
                background-color: #2BAEE2;
                user-select: none;
                display: flex;
                .avatar{
                    width: 80px;
                    height: 100%;
                    text-align: center;
                    img{
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin-top: 20px;

                    }
                }
                .speaking{
                    margin-top: 23px;
                    width: 190px;
                    p{
                        margin-top: 8px;
                    }
                }
                .times{
                    margin-top: 26px;
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
