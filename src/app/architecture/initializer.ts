import { ConfigService } from './config/config.service'

export function Initializer(configService: ConfigService) {
  return () => (configService.load())
}