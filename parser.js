function scheduleHtmlParser(html) {
    let result=[];
    let b = JSON.parse(html);

    for(let i=0;i<b.kbList.length;i++){
        let re = { sections: [], weeks: [] }
        re.name = b.kbList[i].kcmc;
        re.position = b.kbList[i].cdmc;
        let zcd = b.kbList[i].zcd;
        let begin_week = zcd.substr(0,zcd.indexOf("-"));
        let end_week = zcd.substr(zcd.indexOf("-")+1,zcd.length-1);
        for(let j = parseInt(begin_week);j<=parseInt(end_week);j++){
            re.weeks.push(j)
        }
        re.day=b.kbList[i].xqj;
        re.teacher = b.kbList[i].xm;
        let jcs = b.kbList[i].jcs;
        let begin_section = jcs.substr(0,jcs.indexOf("-"));
        let end_section = jcs.substr(jcs.indexOf("-")+1,jcs.length);
        for(let j = parseInt(begin_section);j<=parseInt(end_section);j++){
            re.sections.push(j);
        }
        result.push(re);
    }
    return result;
}