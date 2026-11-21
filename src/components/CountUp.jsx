import { useEffect, useRef, useState } from "react";
export default function CountUp({ target, prefix = "", suffix = "", duration = 1800 }) {
  let [value, setValue] = useState(0),
    ref = useRef(null),
    started = useRef(false);
  return (
    useEffect(() => {
      let el = ref.current;
      if (!el) return;
      let observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let startTime = performance.now();
            function tick(now) {
              let progress = Math.min((now - startTime) / duration, 1),
                eased = 1 - (1 - progress) ** 3;
              (setValue(Math.round(eased * target)),
                progress < 1 && requestAnimationFrame(tick));
            }
            requestAnimationFrame(tick);
          }
        },
        {
          threshold: 0.3,
        },
      );
      return (observer.observe(el), () => observer.disconnect());
    }, [target, duration]),
    (
      <span ref={ref}>
        {prefix}
        {value}
        {suffix}
      </span>
    )
  );
}
