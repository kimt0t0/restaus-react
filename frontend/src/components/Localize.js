import { useEffect, useRef, useState } from 'react'

function Localize (lat, long) {
  const ref = useRef(null)
  const [map, setMap] = useState()
  const [marker, setMarker] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.__googleMapsCallback.maps.Map(ref.current, {}))
    }

    if (!marker) {
      setMarker(new google.maps.Marker())
    }

    if (marker) {
      marker.setMap(null)
    }
  }, [ref, map, marker])
  return (
    <div ref={ref} />
  )
}

export default Localize
