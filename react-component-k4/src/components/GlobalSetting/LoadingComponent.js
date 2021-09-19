import React from 'react'
import styleLoading from '../GlobalSetting/LoadingComponent/LoadingComponent.module.css';
import {useSelector} from 'react-redux'
export default function LoadingComponent() {
    const {isLoading} = useSelector(state => state.LoadingReducer)
    if(isLoading){
        return (
            <div className={styleLoading.bgLoading}>
                <img src="./imgLoading/loading.gif"></img>   
            </div>
        )
    }else {
        return ''
    }
  
}
