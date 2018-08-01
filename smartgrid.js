var smartgrid = require('smart-grid');
var settings = {
   filename: 'smartgrid',
   outputStyle: 'scss',
   columns: 12,
   offset: '15px',
   container: {
       maxWidth: '1140px',
       fields: '15px'
   },
   breakPoints: {
       lg: {
           width: '1100px',
           fields: '15px'
       },
       md: {
           width: '960px',
           fields: '15px'
       },
       sm: {
           width: '780px',
           fields: '15px'
       },
       xs: {
           width: '560px',
           fields: '15px'
       }
   }
};

smartgrid('./src/assets/styles/global', settings);