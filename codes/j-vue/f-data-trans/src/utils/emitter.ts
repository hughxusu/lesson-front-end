import mitt from 'mitt'

type Events = {
  'send-msg': string
}

export const emitter = mitt<Events>()

export default emitter
