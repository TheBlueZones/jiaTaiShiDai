function setRem() {
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    const designWidth = 375; // 设计稿宽度
    const remSize = htmlWidth / designWidth ; // 计算 rem 基准值

    htmlDom.style.fontSize = `${remSize}px`;
}

setRem();

// 监听窗口尺寸变化，实时调整字体大小
window.addEventListener('resize', setRem, false);
