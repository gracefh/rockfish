import { createUniqueId } from "solid-js";
import Align from "../align";
import Group from "../group";
import Rect from "../rect";
import Ref from "../ref";
import { Id } from "../scenegraph";
import Text from "../text";

export type ElmTupleProps = {
  x?: number;
  y?: number;
  id?: Id;
  tupleIndex: string;
  tupleData: { type: string; value: string };
  objectId: string;
};

export function ElmTuple(props: ElmTupleProps) {
  const id = createUniqueId();
  const fontFamily = "verdana, arial, helvetica, sans-serif";

  return (
    <Group
      id={props.id ?? `elm_${props.tupleIndex}_${props.objectId}`}
      x={props.x}
      y={props.y}
    >
      <Rect
        id={`elmBox_${props.tupleIndex}_${props.objectId}`}
        height={60}
        width={70}
        fill={"#ffffc6"}
        stroke={"grey"}
      />
      <Text
        id={`elmLabel_${props.tupleIndex}_${props.objectId}`}
        contents={`${props.tupleIndex}`}
        font-family={fontFamily}
        font-size={"16px"}
        fill={"gray"}
      />
      {props.tupleData.type == "string" ? (
        <Text
          id={`elmVal_${props.tupleIndex}_${props.objectId}`}
          contents={props.tupleData.value}
          font-size={"24px"}
          fill={"black"}
        />
      ) : (
        <Text
          id={`elmVal_${props.tupleIndex}_${props.objectId}`}
          contents={""}
          fill={"none"}
        />
      )}
      <Align alignment="center">
        <Ref refId={`elmVal_${props.tupleIndex}_${props.objectId}`} />
        <Ref refId={`elmBox_${props.tupleIndex}_${props.objectId}`} />
      </Align>
      <Align alignment="topLeft">
        <Ref refId={`elmLabel_${props.tupleIndex}_${props.objectId}`} />
        <Ref refId={`elmBox_${props.tupleIndex}_${props.objectId}`} />
      </Align>
    </Group>
  );
}

export default ElmTuple;
