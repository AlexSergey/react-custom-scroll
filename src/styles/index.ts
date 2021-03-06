import { Styles } from '../types/styles';

type Props = {
  scrollAreaColor: string;
  scrollWidth: string;
  scrollBarRadius: string;
  scrollBarColor: string;
  virtualized: boolean;
  isZero: boolean;
  originalScrollWidth: number;
};

export const stylesFactory = (props: Props, rtl?: boolean): Styles => ({
  scrollArea: Object.assign({
    background: props.scrollAreaColor,
    width: props.scrollWidth,
    padding: '1px',
    zIndex: '10',
    position: 'absolute',
    height: '100%'
  }, rtl ? {
    top: '0',
    left: '0',
  } : {
    top: '0',
    right: '0',
  }),
  scrollAreaFrame: {
    height: '100%',
    position: 'relative'
  },
  scrollBar: Object.assign({
    borderRadius: props.scrollBarRadius,
    position: 'absolute',
    top: '0',
    width: '100%',
    background: props.scrollBarColor,
    cursor: 'pointer'
  }),
  ctmScroll: {
    overflow: 'hidden',
    height: '100%',
    position: 'relative'
  },
  ctmScrollActive: Object.assign({}, rtl ? {
    paddingLeft: props.scrollWidth
  } : {
    paddingRight: props.scrollWidth
  }),
  ctmScrollFrame: Object.assign({}, props.virtualized ? { height: '100%', width: '100%' } : {}, props.isZero ? {
    width: `calc(100% - ${props.originalScrollWidth}px)`
  } : {}),
  noselect: {
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  ctmScrollHolder: {
    overflowY: 'scroll',
    height: '100%'
  }
});
