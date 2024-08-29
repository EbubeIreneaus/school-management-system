import { boot } from 'quasar/wrappers'
import DaySpanVuetify from 'dayspan-vuetify'


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app} ) => {
  // something to do
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.use(DaySpanVuetify, {
    data: {
      // data or computed to override
    },
    computed: {
      // data or computed to override
    },
    methods: {
      // methods to override
    }
  })
})
