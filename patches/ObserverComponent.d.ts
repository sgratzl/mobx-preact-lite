import { VNode } from 'preact';

interface IObserverProps {
  children?(): VNode<any>;
  render?(): VNode<any>;
}
declare function ObserverComponent({ children, render }: IObserverProps): VNode<any> | ((props: any) => VNode<any>);
declare namespace ObserverComponent {
    var propTypes: {
        children: typeof ObserverPropsCheck;
        render: typeof ObserverPropsCheck;
    };
    var displayName: string;
}
export { ObserverComponent as Observer };
declare function ObserverPropsCheck(props: {
    [k: string]: any;
}, key: string, componentName: string, location: any, propFullName: string): Error | null;
