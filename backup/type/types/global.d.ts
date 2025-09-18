export {};

declare global {
    interface Window {
        Swiper: new (selector: string, options?: any) => {
            destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
        };
    }
}
