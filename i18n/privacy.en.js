window.TRANSLATIONS = window.TRANSLATIONS || {};
window.TRANSLATIONS.en = {
  meta: {
    langLabel: 'EN',
    htmlLang:  'en',
    pageTitle: 'Privacy Policy — Lettiq',
  },
  ui: {
    navHome:   'Home',
    heroLabel: 'Legal',
    heroTitle: 'Privacy\nPolicy',
    heroDate:  'Last updated · May 2026',
    tocTitle:  'Contents',
    footerLeft: '© 2026 Lettiq Studio',
  },
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `
        <p>This Privacy Policy explains how <strong>lettiq.studio</strong> ("we", "us", or "our") collects, uses, and protects your information when you play <strong>Lettiq</strong>, a mobile word-puzzle game available on Android and iOS.</p>
        <p>By using the app, you agree to the practices described in this policy.</p>
      `
    },
    {
      id: 'data-collected',
      title: 'Information We Collect',
      content: `
        <p>We collect only what is necessary to run the game:</p>
        <ul>
          <!-- <li><strong>Display name</strong> — the name you enter when setting up your profile, used to identify you in multiplayer games.</li> -->
          <li><strong>Device ID</strong> — a unique identifier for your device, used to track your ranking position in daily leaderboards via PlayFab.</li>
          <li><strong>Advertising identifier</strong> — your device's advertising ID (IDFA on iOS, GAID on Android), used by Google AdMob to serve ads.</li>
          <li><strong>In-app purchase status</strong> — whether you have purchased the "Remove Ads" option. Payment is processed entirely by Google Play or the App Store; we never see your payment details.</li>
          <li><strong>Google Play Games data</strong> — if you sign in with Google Play Games, Google shares your display name, achievement progress, and leaderboard scores with the app. This is governed by Google's own privacy policy.</li>
        </ul>
      `
    },
    /* {
      id: 'lan-multiplayer',
      title: 'LAN Multiplayer Data',
      content: `
        <p>When you host or join a local Wi-Fi game, the app broadcasts and receives the following data over your local network:</p>
        <ul>
          <li>Your display name</li>
          <li>Your device's local IP address</li>
          <li>Room metadata — room name, player count, and game settings</li>
        </ul>
        <p>This data is used solely to discover and connect players on the same network. It is never transmitted to any server or third party and is discarded at the end of the game session.</p>
      `
    }, */
    {
      id: 'how-we-use',
      title: 'How We Use Your Data',
      content: `
        <p>The data we collect is used to:</p>
        <ul>
          <!-- <li>Run the game and its multiplayer features.</li> -->
          <li>Track your ranking position in the daily leaderboard via PlayFab.</li>
          <li>Display leaderboards and achievements via Google Play Games.</li>
          <li>Show ads through Google AdMob.</li>
          <li>Process in-app purchases through Google Play or the App Store.</li>
        </ul>
      `
    },
    {
      id: 'tracking',
      title: 'Tracking Technologies',
      content: `
        <p>Lettiq does not use cookies (it is a native mobile app, not a website).</p>
        <p>Ads are served via <strong>Google AdMob</strong>. This service uses your device's advertising identifier (IDFA/GAID) to show relevant ads. On iOS, you may be asked for permission to track via Apple's App Tracking Transparency (ATT) framework before personalised ads are shown. You can reset your advertising ID or opt out of ad personalisation at any time in your device's privacy settings:</p>
        <ul>
          <li><strong>Android</strong> — Settings → Privacy → Ads</li>
          <li><strong>iOS</strong> — Settings → Privacy &amp; Security → Tracking</li>
        </ul>
        <p>You may also opt out of interest-based advertising via <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">Google's ad settings</a>.</p>
        <p>The app is configured for age-restricted (child-directed) treatment in Google AdMob, which disables behavioural targeting.</p>
      `
    },
    {
      id: 'sharing',
      title: 'Sharing Your Information',
      content: `
        <p>We do not sell or rent your personal information. Data is shared only with the following third-party services, each operating under their own privacy policy:</p>
        <ul>
          <li><strong>PlayFab</strong> (Microsoft) — device ID and ranking data for daily leaderboards. <a href="https://playfab.com/privacy/" target="_blank" rel="noopener">Privacy Policy</a></li>
          <li><strong>Google</strong> (Google Play Games) — achievement and leaderboard data. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a></li>
          <li><strong>Google</strong> (AdMob ad network) — advertising identifier for ad serving. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a></li>
        </ul>
      `
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: `
        <p>Your device ID, display name, and in-app purchase status are stored on-device and remain until you uninstall the app or reset your device. Your ranking position in the daily leaderboard is stored via PlayFab and is automatically reset each day; historical ranking data is not retained.</p>
        <p>Data held by Google Play Games or Google AdMob is subject to their respective retention policies.</p>
      `
    },
    {
      id: 'rights',
      title: 'Your Rights',
      content: `
        <p>Depending on your location, you may have rights regarding your personal data, including access, rectification, erasure, restriction of processing, data portability, and the right to object.</p>
        <p>To exercise any of these rights, please contact us at the address below. We will respond within the timeframe required by applicable law.</p>
      `
    },
    {
      id: 'children',
      title: "Children's Privacy",
      content: `
        <p>Lettiq is available to players of all ages, including children under 13. We take the following measures to protect younger players:</p>
        <ul>
          <li>We do not knowingly collect data that requires parental consent beyond a display name and advertising identifier, both of which can be managed or reset by a parent.</li>
          <li>Google AdMob is configured in child-directed mode, which disables behavioural ad targeting.</li>
        </ul>
        <p>If you are a parent and wish to review or request deletion of any data associated with your child, please contact us at <a href="mailto:lettiq.studio@gmail.com">lettiq.studio@gmail.com</a>.</p>
      `
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: `
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date.</p>
        <p>We encourage you to review this policy periodically.</p>
      `
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
        <div class="contact-box">
          <span><strong>lettiq.studio</strong></span>
          <span>Email: <a href="mailto:lettiq.studio@gmail.com">lettiq.studio@gmail.com</a></span>
        </div>
      `
    },
  ],
};
