/* eslint-disable no-undef */
import { ClientComponent } from './client-component'

export default function Page() {
  return (
    <ul>
      <li>
        Server value:{' '}
        {typeof MY_SERVER_VARIABLE === 'string'
          ? MY_SERVER_VARIABLE
          : 'not set'}
      </li>
      <li>
        Client value: <ClientComponent />
      </li>
    </ul>
  )
}
