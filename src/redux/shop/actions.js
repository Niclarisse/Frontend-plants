import { shopAction } from ".";
import { getAllPlantsService, viewPlantsService } from "./services";
import { notification } from "antd";
export const getAllPlantsAction = () => async (dispatch) => {
  dispatch(shopAction.setIsFetching(true));
  try {
    const res = await getAllPlantsService();
    console.log("data",res)
    if (res) {
      dispatch(shopAction.setIsFetching(false));
      dispatch(shopAction.setAllPlants(res));
      console.log("res data",res)
    }
  } catch (error) {
    console.log("errr", error);
    notification.warning({message:error?.AxiosError?.response?.statusText})
  }
};
export const viewplantAction = (id) => async (dispatch) => {
  dispatch(shopAction.setIsFetching(true));
  try {
    const res = await viewPlantsService(id);
    console.log("data",res)
    if (res) {
      dispatch(shopAction.setIsFetching(false));
      dispatch(shopAction.setSinglePlant(res));
    }
  } catch (error) {
    console.log("errr", error);
    notification.warning({message:error?.AxiosError?.response?.statusText})
  }
};
