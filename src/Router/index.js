import Vue from 'vue';
import vueRouter from 'vue-router';
import Hello from '../components/Hello.vue';
import VFor from '../components/VFor.vue';
import IfAndShow from '../components/IfAndShow.vue';
import Home from '../components/Home.vue';
import User from '../components/User.vue';
import NestedRoute from '../components/NestedRoute.vue';
import Foo from '../components/NestedRouteFoo.vue';
import Post from '../components/NestedRoutePost.vue';
import ProgrammedNavigation from '../components/ProgrammedNavigation.vue';
import Counter from '../components/Counter.vue';
import Inputer from '../components/Input.vue';

Vue.use(vueRouter);

let routes = [
  {
    path: '/',
    components: {
      default: Hello,
      a: VFor,
      b:IfAndShow
    }
  }, {
    path: '/VFor',
    component:VFor
  }, {
    path: '/IfAndShow',
    component:IfAndShow
  },
  // 动态路由参数，以冒号开头
  // 命名路由
  {
    name:'User',
    path: '/User/:name',
    component: User,
  }, {
    path: '/Home',
    component:Home
  },
  // 嵌套路由,children 定义子路由
  {
    path: '/nested-route/:id',
    component: NestedRoute,
    children: [
      {
        path: 'foo',
        component:Foo
      }, {
        path: 'post',
        component:Post
      }
    ]
  },
  // 编程式路由
  // 命名路由
  {
    name:'programmed',
    path: 'programmed',
    component:ProgrammedNavigation
  },
  {
    name: "Counter",
    path: 'counter',
    component:Counter
  },
  {
    name: 'test-v-model-vuex',
    path: '/test-v-model-vuex',
    component:Inputer
  }

];

const router = new vueRouter({
  routes
})

export default router;
