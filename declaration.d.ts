/*
 * @Description: xxx
 * @Author: allenye
 * @Email: allenye@aliyun.com
 * @Date: 2020-11-23 10:17:54
 * @LastEditTime: 2020-12-11 15:19:30
 */
declare module "photo-sphere-viewer";
declare module "photo-sphere-viewer/dist/plugins/markers";
declare interface PanoramaOptions {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  showLoader?: boolean;
  transition?: number;
  sphereCorrection?: {
    pan: number;
    tilt: number;
    roll: number;
  };
}
interface AddMarkerOptions {
  id: string;
  latitude: number;
  longitude: number;
  tooltip: string;
}

interface ViewerPosition {
  latitude: number;
  longitude: number;
}
