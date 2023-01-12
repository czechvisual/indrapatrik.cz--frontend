export const useSticky = () => {
    const onScroll = () => {
        const scrollBodyTop = document.body.scrollTop
        const scrollElementTop = document.documentElement.scrollTop
        const element = document.getElementById('header')

        if (scrollBodyTop > 100 || scrollElementTop > 0) {
            element.classList.add('headerScroll')
        } else {
            element.classList.remove('headerScroll')
        }
    }

    if (typeof window !== "undefined") {
        window.onscroll = function () {
            onScroll()
        }
    }

    return {
        onScroll,
    }
}
