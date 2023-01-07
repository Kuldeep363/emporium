import React from 'react';
import LoadingCss from './Loading.module.css';

const Loading = () => {
  return (
    <div id={LoadingCss.loading}>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
        <div className={`${LoadingCss.skCard} ${LoadingCss.anim}`}></div>
    </div>
  )
}

export default Loading
