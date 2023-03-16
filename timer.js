async function scheduleTimer({
    providerRes,
    parserRes
  } = {}) {
    return {
      totalWeek: 16,  
      startSemester: '',  
      startWithSunday: false,  
      showWeekend: false,  
      forenoon: 5,  
      afternoon: 4,  
      night: 3,  
      sections: [{
        section: 1,  
        startTime: '08:10',  
        endTime: '08:55',  
      },{
        section: 2, 
        startTime: '09:00',
        endTime: '09:45', 
      },
      {
        section: 3, 
        startTime: '10:00',
        endTime: '10:45', 
      },
      {
        section: 4, 
        startTime: '10:50', 
        endTime: '11:35', 
      },
      {
        section: 5, 
        startTime: '11:40', 
        endTime: '12:25',
      },
      {
        section: 6,  
        startTime: '13:30',  
        endTime: '14:15',  
      },
      {
        section: 7,  
        startTime: '14:20',  
        endTime: '15:05',  
      },
      {
        section: 8,  
        startTime: '15:15',  
        endTime: '16:00',  
      },
      {
        section: 9,  
        startTime: '16:05',  
        endTime: '16:50',  
      },
      {
        section: 10,  
        startTime: '18:30',  
        endTime: '19:15',  
      },
      {
        section: 11,  
        startTime: '19:20',  
        endTime: '20:05',  
      },
      {
        section: 12,  
        startTime: '20:10',  
        endTime: '20:55',  
      },
    ],  
    }
  }