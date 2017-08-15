# eventemitter2 for typescript type definition

```
npm install --save https://github.com/74th/eventemitter2ts.git
```

```typescript
import { EventEmitter2 } from "eventemitter2ts";

interface NumberEvents {
	change: number;
	click: MouseEvent;
}

class NumberBoard extends EventEmitter2<CursorBoardEvents> {
	counstructor() {
		super()

		// can use type definitions
		this.on("change",(n:number)=>{
			console.log("change event", n);
		});

		// this code has a type error
		this.on("change",(s:string)=>{
			console.log("change event", s);
		});
	}

	setNumber(n:number) {
		// can use type definitions
		this.emit("change", n);

		// this code has a type error
		this.emit("change", n.toString());
	}
}

```