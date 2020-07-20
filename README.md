# OpenEdge-ZExt Types

Type library for `OpenEdge-ZExt` - Visual Studio Code extension

## Usage

Installation
```
npm install @oe-zext/types
```

TypeScript
```typescript
import { AblType, AblTypeCheck, DbType } from "@oe-zext/types";
...
// ABL types @ AblType
var parameter: AblType.Parameter;
// DB types @DbType
var field: DbType.Field;
// ABL type check or transformation @ AblTypeCheck
if (AblTypeCheck.isVariable(myVariable)) {
    return AblTypeCheck.variable2parameter(myVariable);
}
```


## License
Licensed under the [Apache-2.0](LICENSE) License.
