import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function AppLogo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={200}
      overflow="visible"
      viewBox="0 0 550 300"
      {...props}
    >
      <Path
        fill="#0078be"
        d="M288.315 216.193H433.76v85.105H288.315zM188.416 237.566h9.897l-6.928 39.588h-9.952l2.53-14.296H173.24l-2.475 14.296h-9.951l6.982-39.588h9.897l-2.969 16.715h10.722l2.969-16.715zm40.742 39.588h-10.446l.33-8.632h-9.183l-2.694 8.632h-10.502l14.131-39.588h18.145l.22 39.588zm-9.237-29.966h-3.464l-4.343 13.966h7.202l.605-13.966zm21.444-9.622h15.945q6.268 0 8.907 2.75 1.98 2.089 1.98 5.278 0 1.1-.22 2.309l-.77 4.289q-.66 3.574-2.282 5.773t-3.602 3.134l5.004 16.055H255.22l-4.618-14.79h-3.41l-2.253 14.79h-10.557l6.983-39.588zm12.48 8.578h-4.123l-1.43 9.567h3.85q2.913 0 4.178-1.402t1.265-3.712q0-4.453-3.74-4.453z"
      />
      <Path
        fill="#fff"
        d="M305.762 237.156h16.118q6.336 0 9.004 2.78 2 2.111 2 5.335 0 1.112-.222 2.334l-.5 2.668q-.611 3.168-2.362 4.947t-3.085 1.778l-.055.445q1.556 0 3.168 1.723t1.612 4.057q0 .945-.223 2.001l-.333 1.723q-.89 4.78-4.252 7.504-3.363 2.723-9.365 2.723h-18.564l7.059-40.018zm11.116 23.677h-5.28l-1.334 7.67h5.502q2.557 0 4.057-1.194t1.501-2.918q0-3.558-4.446-3.558zm1.5-15.006h-4.168l-1.445 8.281h4.113q5.335 0 5.335-4.668 0-1.612-.972-2.613-.973-1-2.863-1zm38.462-9.06q13.394 0 13.394 10.95 0 1.834-.389 3.946l-1.945 11.116q-1.334 7.725-5.78 11.45-4.447 3.723-12.506 3.723t-11.227-3.724q-2.167-2.556-2.167-7.058 0-2.001.444-4.391l1.945-11.116q2.613-14.896 18.23-14.896zm-5.725 32.57q2.779 0 4.446-1.445t2.335-5.336l1.89-10.67q.166-1.113.166-2.002 0-4.502-4.557-4.502-5.725.111-6.837 6.503l-1.89 10.671q-.222 1.39-.222 2.89 0 3.891 4.669 3.891zm28.068-32.18H395.3q6.336 0 9.004 2.778 2 2.112 2 5.336 0 1.112-.221 2.334l-.779 4.336q-.667 3.612-2.306 5.836t-3.64 3.168l5.057 16.229H393.19l-4.669-14.951h-3.446l-2.278 14.951h-10.672l7.059-40.018zm12.617 8.67h-4.169l-1.445 9.67h3.89q2.946 0 4.225-1.416t1.278-3.752q0-4.502-3.78-4.502z"
      />
      <Path
        fill="#0078be"
        d="M280.798 223.001v71.488H148.214V223h132.584m7.517-6.808H140.697v85.104h147.618v-85.104z"
      />
    </Svg>
  )
}

export default AppLogo
