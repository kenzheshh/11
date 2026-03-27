import React, { useEffect, useRef } from 'react';

export default function AmoCrmForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Use a small timeout to prevent double-injection in React 18 Strict Mode
    const timer = setTimeout(() => {
      container.innerHTML = '';

      // Inject inline script
      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1688826",hash:"d85084ea3f7be9b79a70a65b27ceaf25",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;
      container.appendChild(inlineScript);

      // Inject external script
      const externalScript = document.createElement('script');
      externalScript.id = 'amoforms_script_1688826';
      externalScript.async = true;
      externalScript.charset = 'utf-8';
      externalScript.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1774510850';
      container.appendChild(externalScript);
    }, 50);

    return () => {
      clearTimeout(timer);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center relative pointer-events-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Оставьте заявку</h3>
        <p className="text-slate-400 text-sm">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
      </div>
      <div ref={containerRef} className="w-full flex justify-center amo-form-wrapper" />
    </div>
  );
}
