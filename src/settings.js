import {dateFormatter} from 'react-dashboard';

export var settings = {
  title: 'Georgia Reports',
  regions: {
    top: [
     {
        type: 'Autocomplete',
        name: 'some-name',
        multi: true,
        options: [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }],
        cardStyle: 'none'
      },
      {
        header:'Top',
        type: 'GAChart',
        iconClass: 'glyphicon glyphicon-tree-conifer',
        settings: {
          id:'lineChart2',
          type: 'lineChart',
          x: 'date',
          y: 'price',
          height: 340,
          margin: {
            left: 38
          },
          color: ['#EA7E7E'],
          xAxis: {
            tickFormat: dateFormatter('%Y')
          }
        },
        cardStyle: 'card',
        fetchData: {type:'function', name: 'getCustomData'},

      },
      {
        type: 'Choropleth',
        format: 'geojson',
        fetchData: {
          url: '/data/apollo-parsed-1737-325_0.csv',
          type: 'backend',
          backend: 'csv',
          // delimiter: '\t'
        },
        id: 'Choropleth',
        dataKeyField: 'Zone',
        dataValueField: 'Total Observers',
        geometryKeyField: 'name',
        geometry: '/data/zones.geojson', // topojson or geojson
        projection: 'equirectangular', // https://github.com/d3/d3/wiki/Geo-Projections
        scaleDenominator: .7,
        borderColor: '#000000',
        noDataColor: '#F3F3F3',
        startColor: 'red',
        endColor: 'yellow',
        dataClassification: 'equidistant',
        legend: {
          classesCount: 5,
          palleteKey: 'GnBu',
          pallete: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
          domainStartValue: '',
          domainEndValue: '',
        }
        // customMin: '',
        // customMax: '',
        // topologyObject: 'counties'
      },
    ],
    middleFirst: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#9F3E69',
        metric: 'getRandomMetric',
        caption: 'New Users',
      }
    ],
    middleSecond: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#F3BA4F',
        metric: 'getRandomMetric',
        caption: 'Visitors',
      }
    ],
    middleThird: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#3EB1AE',
        metric: 'getRandomMetric',
        caption: 'Page views',
      }
    ],
    middleFourth: [
      {
        type:'GAMetric',
        cardStyle: 'metric',
        background: '#0B90B1',
        metric: 'getRandomMetric',
        caption: 'Unique Visitors',
      }
    ],
    goalsFirst: [
      {
        type: 'GAGoal',
        title: '',
        caption: 'number of schools enrollments',
        link: 'http://tootherplace.com',
        icon: 'glyphicon-leaf',
        startDate: '03/24/2016',
        endDate: '04/24/2016',
        startNumber: 0,
        endNumber: 200,
        showEndNumber: false,
        action: 'maintain_above',
        background: 'white',
        captionTemplates: {
          maintain_above: 'yo quiero mi template',
        },
        // trackStatus: 'function',
        tolerance: [
          {from: 0, to: 2, label: 'On Track', color: 'green'},
          {from: 2, to: 5, label: 'Needs Improvement', color: 'orange'},
          {from: 5, to: Infinity, label: 'Off Track', color: 'red'},
        ],
        spline: {
          height: 50,
        },
        fetchData: {type:'function', name: 'getCustomData'},
        metric: 'getRandomMetric'
      }
    ],
    goalsSecond: [
      {
        type: 'GAGoal',
        title: '',
        caption: 'number of schools enrollments',
        link: 'http://tootherplace.com',
        icon: 'glyphicon-shopping-cart',
        startDate: '03/24/2016',
        endDate: '04/24/2016',
        startNumber: 0,
        endNumber: 200,
        action: 'increase',
        background: 'white',
        // trackStatus: 'function',
        tolerance: [
          {from: 0, to: 2, label: 'On Track', color: 'green'},
          {from: 2, to: 5, label: 'Needs Improvement', color: 'orange'},
          {from: 5, to: Infinity, label: 'Off Track', color: 'red'},
        ],
        spline: {
          height: 50,
        },
        fetchData: {type:'function', name: 'getCustomData'},
        metric: 'getRandomMetric'
      }
    ],
    goalsThird: [
      {
        type: 'GAGoal',
        title: '',
        caption: 'number of schools enrollments',
        link: 'http://tootherplace.com',
        icon: 'glyphicon-gbp',
        startDate: '03/24/2016',
        endDate: '04/24/2016',
        startNumber: 0,
        endNumber: 200,
        action: 'increase',
        background: 'white',
        // trackStatus: 'function',
        tolerance: [
          {from: 0, to: 2, label: 'On Track', color: 'green'},
          {from: 2, to: 5, label: 'Needs Improvement', color: 'orange'},
          {from: 5, to: Infinity, label: 'Off Track', color: 'red'},
        ],
        spline: {
          height: 50,
        },
        fetchData: {type:'function', name: 'getCustomData'},
        metric: 'getRandomMetric'
      }
    ],
    left: [
      {
        header:'Left',
        iconClass: 'glyphicon glyphicon-fire',
        type: 'GAChart',
        settings: {
          id:'lineChart',
          type: 'lineChart',
          x: 'date',
          y: 'price',
          height: 300,
          margin: {
            left: 38
          },
          xAxis: {
            tickFormat: dateFormatter('%Y')
          }
        },
        cardStyle: 'card',
        fetchData: {type:'function', name: 'getCustomData'}
      },
      {
        type: 'GATable',
        header: 'Mi titulo',
        fetchData: {
          type:'backend',
          backend: 'csv',
          url: 'http://demo.getdkan.com/node/9/download',
        },
        cardStyle: 'table',
        settings: {
          table: {
            rowHeight: 40,
            width: 800,
            maxHeight: 300,
            headerHeight:40
          },
          columns: {
            flexGrow: 1,
            width: 150,
            overrides: {
              a1: {
                flexGrow: 0.5
              }
            }
          },
          cells: {
            height: 40,
            width: 500,
            overrides: {
              1: {
                height: 40
              }
            }
          }
        }
      },
    ],
    right: [
      {
        header:'Right',
        type: 'GAChart',
        iconClass: 'glyphicon glyphicon-exclamation-sign',
        settings: {
          id:'barChart',
          type: 'lineChart',
          x: 'date',
          y: 'price',
          height: 300,
          margin: {
            left: 38
          },
          color: ['#82899B'],
          xAxis: {
            tickFormat: dateFormatter('%Y')
          }
        },
        cardStyle: 'card',
        fetchData: {type:'function', name: 'getCustomData'},
      },
      {
        header: 'This is an awesome text',
        type: 'Text',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat dui, sodales eleifend placerat a, dictum sed tortor.</p><p> Quisque porttitor urna in est vehicula, a molestie nunc pharetra. Cras vehicula nisi dui, ut aliquam nunc vulputate lacinia. Curabitur vitae interdum dolor, sed venenatis tellus. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat metus et ipsum lobortis, at porttitor nunc laoreet.</p><p>Nullam et ligula at enim pretium accumsan. In et facilisis enim, vel consectetur justo. Duis eleifend sit amet neque eu interdum. Sed ornare orci diam, ac finibus ipsum posuere vel. Duis maximus velit ipsum, et mattis massa tempus sit amet. Suspendisse potenti.</p>',
        cardStyle: 'card',
      }
    ],
  }
};
