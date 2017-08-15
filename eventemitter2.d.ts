export type eventNS = string[];
export interface ConstructorOptions {
    /**
     * @default false
     * @description set this to `true` to use wildcards.
     */
	wildcard?: boolean,
    /**
     * @default '.'
     * @description the delimiter used to segment namespaces.
     */
	delimiter?: string,
    /**
     * @default true
     * @description set this to `true` if you want to emit the newListener events.
     */
	newListener?: boolean,
    /**
     * @default 10
     * @description the maximum amount of listeners that can be assigned to an event.
     */
	maxListeners?: number
    /**
     * @default false
     * @description show event name in memory leak message when more than maximum amount of listeners is assigned, default false
     */
	verboseMemoryLeak?: boolean;
}
export interface Listener<T> {
	(arg: T): any;
}
export interface EventAndListener<K> {
	(event: K | K[], ...values: any[]): void;
}

export declare class EventEmitter2<T> {
	constructor(options?: ConstructorOptions)
	emit<K extends keyof T>(event: K | K[], arg: T[K]): boolean;
	emitAsync<K extends keyof T>(event: K | K[], arg: T[K]): Promise<any[]>;
	addListener<K extends keyof T>(event: K, listener: (arg: T[K]) => any): this;
	on<K extends keyof T>(event: K | K[], listener: Listener<T[K]>): this;
	prependListener<K extends keyof T>(event: K | K[], listener: (arg: T[K]) => any): this;
	once<K extends keyof T>(event: K | K[], listener: Listener<T[K]>): this;
	prependOnceListener<K extends keyof T>(event: string | string[], listener: Listener<T[K]>): this;
	many<K extends keyof T>(event: string | string[], timesToListen: number, listener: Listener<T[K]>): this;
	prependMany<K extends keyof T>(event: string | string[], timesToListen: number, listener: Listener<T[K]>): this;
	// onAny<K extends keyof T>(listener: EventAndListener<T[K]>): this;
	// prependAny<K extends keyof T>(listener: EventAndListener<T[K]>): this;
	offAny<K extends keyof T>(listener: Listener<T[K]>): this;
	removeListener<K extends keyof T>(event: string | string[], listener: Listener<T[K]>): this;
	off<K extends keyof T>(event: string, listener: Listener<T[K]>): this;
	removeAllListeners<K extends keyof T>(event?: string | eventNS): this;
	setMaxListeners<K extends keyof T>(n: number): void;
	eventNames(): string[];
	listeners<K extends keyof T>(event: string | string[]): Listener<K>[] // TODO: not in documentation by Willian
	listenersAny<K extends keyof T>(): Listener<K>[] // TODO: not in documentation by Willian
}