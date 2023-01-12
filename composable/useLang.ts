import { useI18n } from 'vue-i18n'

export const useLang = () => {
    const { locale, locales } = useI18n()
    const localePath = useLocalePath()
    const switchLocalePath = useSwitchLocalePath()
    const { t, tm, rt } = useI18n()

    return {
        t,
        rt,
        tm,
        locale,
        locales,
        localePath,
        switchLocalePath
    }
}
