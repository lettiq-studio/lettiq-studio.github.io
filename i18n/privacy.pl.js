window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS.pl = {
  meta: {
    langLabel: 'PL',
    htmlLang:  'pl',
    pageTitle: 'Polityka Prywatności — Lettiq',
  },
  ui: {
    navHome:   'Strona główna',
    heroLabel: 'Informacje prawne',
    heroTitle: 'Polityka\nPrywatności',
    heroDate:  'Ostatnia aktualizacja · Marzec 2026',
    tocTitle:  'Spis treści',
    footerLeft: '© 2026 Lettiq Studio',
  },
  sections: [
    {
      id: 'wstep',
      title: 'Wstęp',
      content: `
        <p>Niniejsza Polityka Prywatności opisuje, w jaki sposób <strong>lettiq.studio</strong> („my", „nas" lub „nasz") zbiera, wykorzystuje i chroni Twoje informacje podczas grania w <strong>Lettiq</strong> — mobilną grę słowną dostępną na Androida i iOS.</p>
        <p>Korzystając z aplikacji, wyrażasz zgodę na praktyki opisane w niniejszej polityce.</p>
      `
    },
    {
      id: 'dane-zbierane',
      title: 'Zbierane dane',
      content: `
        <p>Zbieramy wyłącznie dane niezbędne do działania gry:</p>
        <ul>
          <!-- <li><strong>Nazwa wyświetlana</strong> — imię lub pseudonim, który podajesz podczas konfiguracji profilu, używany do identyfikacji w trybie wieloosobowym.</li> -->
          <li><strong>Identyfikator reklamowy</strong> — identyfikator reklamowy Twojego urządzenia (IDFA na iOS, GAID na Androidzie), używany przez Google AdMob do wyświetlania reklam.</li>
          <li><strong>Status zakupu w aplikacji</strong> — informacja o tym, czy zakupiłeś/-aś opcję „Usuń reklamy". Płatność jest w całości obsługiwana przez Google Play lub App Store; nie mamy dostępu do Twoich danych płatniczych.</li>
          <li><strong>Dane Google Play Games</strong> — jeśli zalogujesz się przez Google Play Games, Google przekazuje aplikacji Twoją nazwę wyświetlaną, postęp osiągnięć i wyniki na liście najlepszych. Dane te podlegają własnej polityce prywatności Google.</li>
        </ul>
      `
    },
    /* {
      id: 'multiplayer-lan',
      title: 'Dane w trybie LAN',
      content: `
        <p>Gdy tworzysz lub dołączasz do gry przez lokalną sieć Wi-Fi, aplikacja wysyła i odbiera w sieci lokalnej następujące dane:</p>
        <ul>
          <li>Twoją nazwę wyświetlaną</li>
          <li>Lokalny adres IP Twojego urządzenia</li>
          <li>Metadane pokoju — nazwa pokoju, liczba graczy i ustawienia gry</li>
        </ul>
        <p>Dane te służą wyłącznie do wykrywania i łączenia graczy w tej samej sieci. Nie są nigdy przesyłane na żaden serwer ani do podmiotów trzecich i są usuwane po zakończeniu sesji gry.</p>
      `
    }, */
    {
      id: 'jak-uzywamy',
      title: 'Jak używamy Twoich danych',
      content: `
        <p>Zebrane dane są wykorzystywane w celu:</p>
        <ul>
          <!-- <li>Uruchamiania gry i jej funkcji wieloosobowych.</li> -->
          <li>Wyświetlania list wyników i osiągnięć za pośrednictwem Google Play Games.</li>
          <li>Wyświetlania reklam przez Google AdMob.</li>
          <li>Obsługi zakupów w aplikacji przez Google Play lub App Store.</li>
        </ul>
      `
    },
    {
      id: 'sledzenie',
      title: 'Technologie śledzenia',
      content: `
        <p>Lettiq nie używa plików cookie (jest to natywna aplikacja mobilna, nie strona internetowa).</p>
        <p>Reklamy są wyświetlane za pośrednictwem <strong>Google AdMob</strong>. Ta usługa używa identyfikatora reklamowego Twojego urządzenia (IDFA/GAID) do wyświetlania reklam. Na iOS możesz zostać poproszony/-a o zgodę na śledzenie w ramach mechanizmu App Tracking Transparency (ATT) firmy Apple, zanim zostaną wyświetlone spersonalizowane reklamy. Możesz w każdej chwili zresetować identyfikator reklamowy lub zrezygnować z personalizacji reklam w ustawieniach prywatności urządzenia:</p>
        <ul>
          <li><strong>Android</strong> — Ustawienia → Prywatność → Reklamy</li>
          <li><strong>iOS</strong> — Ustawienia → Prywatność i ochrona → Śledzenie</li>
        </ul>
        <p>Możesz też zrezygnować z reklam opartych na zainteresowaniach poprzez <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">ustawienia reklam Google</a>.</p>
        <p>Aplikacja jest skonfigurowana w trybie kierowanym do dzieci (child-directed) w Google AdMob, co wyłącza targetowanie behawioralne.</p>
      `
    },
    {
      id: 'udostepnianie',
      title: 'Udostępnianie danych',
      content: `
        <p>Nie sprzedajemy ani nie wynajmujemy Twoich danych osobowych. Dane są udostępniane wyłącznie następującym usługom zewnętrznym, z których każda działa zgodnie z własną polityką prywatności:</p>
        <ul>
          <li><strong>Google</strong> (Google Play Games) — dane osiągnięć i list wyników. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Polityka prywatności</a></li>
          <li><strong>Google</strong> (sieć reklamowa AdMob) — identyfikator reklamowy do wyświetlania reklam. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Polityka prywatności</a></li>
        </ul>
      `
    },
    {
      id: 'przechowywanie',
      title: 'Przechowywanie danych',
      content: `
        <p>Twoja nazwa wyświetlana i status zakupu w aplikacji są przechowywane lokalnie na urządzeniu i pozostają do momentu odinstalowania aplikacji lub zresetowania urządzenia. <!-- Dane trybu LAN (nazwa wyświetlana, lokalny adres IP, metadane pokoju) są przechowywane wyłącznie przez czas trwania sesji gry i nigdy nie są zapisywane trwale. --></p>
        <p>Dane przechowywane przez Google Play Games lub Google AdMob podlegają ich własnym politykom przechowywania.</p>
      `
    },
    {
      id: 'prawa',
      title: 'Twoje prawa',
      content: `
        <p>W zależności od miejsca zamieszkania możesz posiadać prawa dotyczące swoich danych osobowych, w tym prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszalności danych oraz prawo sprzeciwu.</p>
        <p>Aby skorzystać z któregokolwiek z tych praw, skontaktuj się z nami pod adresem podanym poniżej. Odpowiemy w terminie wymaganym przez obowiązujące przepisy prawa.</p>
      `
    },
    {
      id: 'dzieci',
      title: 'Prywatność dzieci',
      content: `
        <p>Lettiq jest dostępna dla graczy w każdym wieku, w tym dla dzieci poniżej 13. roku życia. Podejmujemy następujące środki w celu ochrony młodszych graczy:</p>
        <ul>
          <li>Nie zbieramy świadomie danych wymagających zgody rodziców, poza nazwą wyświetlaną i identyfikatorem reklamowym — obie te wartości mogą być przez rodzica zarządzane lub zresetowane.</li>
          <li>Google AdMob jest skonfigurowany w trybie child-directed, który wyłącza behawioralne targetowanie reklam.</li>
        </ul>
        <p>Jeśli jesteś rodzicem i chcesz przejrzeć lub zażądać usunięcia danych powiązanych z Twoim dzieckiem, skontaktuj się z nami pod adresem <a href="mailto:lettiq.studio@gmail.com">lettiq.studio@gmail.com</a>.</p>
      `
    },
    {
      id: 'zmiany',
      title: 'Zmiany w polityce',
      content: `
        <p>Możemy od czasu do czasu aktualizować niniejszą Politykę Prywatności. O istotnych zmianach poinformujemy Cię, zamieszczając nową politykę na tej stronie i aktualizując datę „Ostatniej aktualizacji".</p>
        <p>Zachęcamy do okresowego przeglądania niniejszej polityki.</p>
      `
    },
    {
      id: 'kontakt',
      title: 'Kontakt',
      content: `
        <p>Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub naszych praktyk w zakresie danych, skontaktuj się z nami:</p>
        <div class="contact-box">
          <span><strong>lettiq.studio</strong></span>
          <span>E-mail: <a href="mailto:lettiq.studio@gmail.com">lettiq.studio@gmail.com</a></span>
        </div>
      `
    },
  ],
};
