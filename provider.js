async function scheduleHtmlProvider() {
    // await loadTool('AIScheduleTools');
    try {
      const xnm=document.querySelectorAll("option[selected='selected']")[0].value;
      const xqm=document.querySelectorAll("option[selected='selected']")[1].value;
      const kzlx='ck';
      const res = await fetch('http://jwglxt.zstu.edu.cn/jwglxt/kbcx/xskbcx_cxXsgrkb.html',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "xnm="+parseInt(xnm)+"&xqm="+parseInt(xqm)+"&kzlx=ck",
      })
      return JSON.stringify(await res.json())
    } catch (error) {
     //await AIScheduleAlert(error.message)
      return 'do not continue'
    }
  }