export default function SlowComponent({ value }: { value: number }) {
  console.log("SlowComponent rendered with", value);
  // 매우 느린 계산 시뮬레이션
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i * value;
  }
  return <div>Computed: {sum}</div>;
}
