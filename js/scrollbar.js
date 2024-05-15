let Scrollbar = window.Scrollbar;
Scrollbar.use(window.OverscrollPlugin);

const scrollbar = Scrollbar.init(document.body,{
    // Momentum reduction damping factor, a float value between (0, 1), the lower the value is, the more smooth the scrolling will be (also the more paint frames).
    damping: 0.05,
  
    // Minimal size for scrollbar thumb.
    thumbMinSize: 5,
  
    // Render scrolling by integer pixels
    renderByPixels: true,
  
    // Whether allow upper scrollable content to continue scrolling when current scrollbar reaches edge.
    // When set to 'auto', it will be enabled on nested scrollbars, and disabled on first-class scrollbars.
    continuousScrolling: "auto",
    delegateTo: null,
    plugins: {
        overscroll: {
            // effect: 'glow',
            damping: 0.19,
            // glowColor: '#71e515'
        },
    },
  });

  window.Scrollbar = scrollbar;