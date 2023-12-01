import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap_white.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

type Props = {
  from: number;
  to: number;
  min?: number;
  max?: number;
  onChange: (value: number[]) => void;
};

function RangeInput({ from, to, min = 0, max = 200, onChange }: Props) {
  return (
    <>
      <div className="px-2">
        <Slider
          handleRender={(node, handleProps) => {
            return (
              <Tooltip
                overlay={handleProps.value + ' ETH'}
                placement="top"
                overlayInnerStyle={{
                  background: 'linear-gradient(to right, #da458f, #da34dd)',
                  borderRadius: 8,
                  color: '#fff',
                }}
              >
                {node}
              </Tooltip>
            );
          }}
          value={[from, to]}
          range
          allowCross={false}
          defaultValue={[0, 200]}
          min={min}
          max={max}
          styles={{
            track: {
              background: 'linear-gradient(to right, #da458f, #da34dd)',
              height: 8,
            },
            handle: {
              boxShadow: 'none',
              borderColor: '#3a3841',
              borderWidth: 4,
              backgroundColor: '#da34dd',
              opacity: 1,
              top: 0,
              width: 26,
              height: 26,
            },
            rail: {
              backgroundColor: '#3a3841',
              height: 8,
            },
          }}
          onChange={(value) => {
            if (typeof value !== 'number') {
              onChange(value);
            }
          }}
        />
      </div>
      <div className="mt-4 flex justify-between text-sm text-secondary">
        <span>{min} ETH</span>
        <span>{max} ETH</span>
      </div>
    </>
  );
}

export default RangeInput;
