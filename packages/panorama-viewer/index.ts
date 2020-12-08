/*
 * @Description: xxx
 * @Author: allenye
 * @Email: allenye@aliyun.com
 * @Date: 2020-12-07 15:31:05
 * @LastEditTime: 2020-12-08 10:15:55
 */
import PanoramaViewer from "./src/panorama-viewer.vue";

PanoramaViewer.install = function(Vue:any) {
  Vue.component(PanoramaViewer.name, PanoramaViewer);
};

export default PanoramaViewer;