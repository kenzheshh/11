import React, { useRef, useEffect } from 'react';

export default function AmoCrmForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { margin: 0; background: transparent; overflow: hidden; display: flex; justify-content: center; }
            .amo-form-wrapper { width: 100%; }
          </style>
        </head>
        <body>
          <div class="amo-form-wrapper">
            <script>
              !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1688826",hash:"d85084ea3f7be9b79a70a65b27ceaf25",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
            </script>
            <script id="amoforms_script_1688826" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1774510850"></script>
          </div>
        </body>
      </html>
    `);
    doc.close();
  }, []);

  return (
    <div className="w-full min-h-[600px] flex flex-col items-center justify-center relative pointer-events-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Оставьте заявку</h3>
        <p className="text-slate-400 text-sm">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
      </div>
      <iframe
        ref={iframeRef}
        title="AmoCRM Form"
        className="w-full h-[600px] border-none overflow-hidden"
        scrolling="no"
      />
      <div className="mt-4 text-xs text-slate-500">
        Если форма не загрузилась, пожалуйста, обновите страницу.
      </div>
    </div>
  );
}
