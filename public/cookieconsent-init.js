/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// obtain cookieconsent plugin
var cookieconsent = initCookieConsent();

// run plugin with config object
cookieconsent.run({
    autorun: true,
    revision: 1,
    // current_lang: 'cs',
    auto_language: 'document',
    autoclear_cookies: true,
    page_scripts: true,

    gui_options: {
        consent_modal: {
            layout: 'bar', // box/cloud/bar
            position: 'bottom center', // bottom/middle/top + left/right/center
            transition: 'slide', // zoom/slide
            swap_buttons: false // enable to invert buttons
        },
        settings_modal: {
            layout: 'box', // box/bar
            // position: 'left',           // left/right
            transition: 'slide' // zoom/slide
        }

    },

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        cs: {
            consent_modal: {
                title: 'Na vašem soukromí nám záleží',
                description: 'Používáme soubory cookies, potvrďte prosím že souhlasíte s využívaním cookies. <br><a data-cc="c-settings" class="cc-link">Nastavení cookies</a> | <a class="cc-link" href="/cookies" target="_blank">Více o cookies</a>',
                primary_btn: {
                    text: 'Přijmout všechny',
                    role: 'accept_all' // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Pouze nezbytné',
                    role: 'accept_necessary' // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Podrobné nastavení',
                save_settings_btn: 'Uložit nastavení',
                accept_all_btn: 'Přijmout všechny',
                reject_all_btn: 'Odmítnout všechny', // optional, [v.2.5.0 +]
                blocks: [{
                    title: 'Co jsou cookies?',
                    description: 'Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.<br><a href="/cookies" target="_blank">Více o cookies</a>'
                }, {
                    title: 'Funkční cookies',
                    description: 'Tyto soubory cookie jsou nezbytné pro fungování webových stránek, není tedy možné je zakázat. Obvykle se nastavují v reakci na akci, kterou na webu sami provedete, jako je nastavení zabezpečení, přihlášení a vyplňování formulářů. Svůj prohlížeč můžete nastavit tak, aby blokoval soubory cookie nebo o nich zasílal upozornění. Mějte na paměti, že některé stránky nebudou bez těchto souborů fungovat. Tyto soubory cookie neukládají žádné informace, které lze přiřadit konkrétní osobě. Tyto soubory cookie můžeme nastavit my nebo poskytovatelé třetích stran, jejichž služby na webu využíváme.',
                    toggle: {
                        value: 'necessary',
                        enabled: true,
                        readonly: true
                    },
                }, {
                    title: 'Analytické cookies',
                    description: 'Tyto soubory cookie se používají ke zlepšení fungování webových stránek. Umožňují nám rozpoznat a sledovat počet návštěvníků a sledovat, jak návštěvníci web používají. Pomáhají nám zlepšovat způsob, jakým webové stránky fungují, například tím, že uživatelům umožňují snadno najít to, co hledají. Tyto soubory cookie neshromažďují informace, které by vás mohly identifikovat. Pomocí těchto nástrojů analyzujeme a pravidelně zlepšujeme funkčnost našich webových stránek. Získané statistiky můžeme využít ke zlepšení uživatelského komfortu a k tomu, aby byla návštěva webu pro vás jako uživatele zajímavější.',
                    toggle: {
                        value: 'analytics',
                        enabled: false,
                        readonly: false
                    },
                }, {
                    title: 'Marketingové cookies',
                    description: 'Používají se ke sledování preferencí webu uživatele za účelem cílení reklamy, tj. zobrazování marketingových a reklamních sdělení (i na stránkách třetích stran), které mohou návštěvníka webu zajímat, v souladu s těmito preferencemi. Marketingové cookies využívají nástroje externích společností. Tyto marketingové soubory cookie budou použity pouze s vaším souhlasem.',
                    toggle: {
                        value: 'advertisement',
                        enabled: false,
                        readonly: false
                    },
                }, {
                    title: 'Více informací',
                    description: 'Pokud máte nějaké další otázky ohledně cookies, nebo chcete znát více informací <a class="cc-link" href="/kontakt" target="_blank">kontaktujte nás</a>.',
                }]
            }
        }
    }
});
