import { For, createUniqueId } from "solid-js";
import { Id } from "../scenegraph";
import Rect from "../rect";
import Group from "../group";
import Align from "../align";
import Ref from "../ref";
import { StackSlot } from "./stack-slot";
import Distribute from "../distribute";
import Text from "../text";

export type GlobalFrameProps = {
  id?: Id;
  variables: { variable: string; value: string }[];
};

export function GlobalFrame(props: GlobalFrameProps) {
  const id = createUniqueId();

  // Font declaration
  const fontFamily = "Andale mono, monospace";

  return (
    <Group x={0} y={0} id={props.id ?? `group${id}`}>
      {/* Global Frame and relevant text */}
      <Rect id={`frame${id}`} height={300} width={200} fill={"#e2ebf6"} />
      <Rect id={`frameBorder${id}`} height={300} width={5} fill={"#a6b3b6"} />
      {/* TODO: there is a bug where the text is showing up lower than I expect it to... */}
      <Text
        id={`label${id}`}
        contents={"Global Frame"}
        font-size={"24px"}
        font-family={fontFamily}
        fill={"black"}
      />
      {/* <Rect id={`label${id}`} fill="black" width={100} height={20} /> */}
      <Align id={`align1${id}`} alignment="topCenter">
        <Ref refId={`label${id}`} />
        <Ref refId={`frame${id}`} />
      </Align>
      <Align id={`align3${id}`} alignment="centerLeft">
        <Ref refId={`frameBorder${id}`} />
        <Ref refId={`frame${id}`} />
      </Align>
      <Group id={`frameVariables${id}`}>
        <For each={props.variables}>
          {(variable: any, i) => (
            <StackSlot
              id={`stackSlot${id}-${i()}`}
              variable={variable.variable}
              value={variable.value}
            />
          )}
        </For>
        <Align id={`alignStackSlot${id}`} alignment="right">
          <For each={props.variables}>
            {(variable: any, i) => <Ref refId={`stackSlot${id}-${i()}`} />}
          </For>
        </Align>
        <Distribute
          id={`distributeStackSlot${id}`}
          direction="vertical"
          spacing={10}
        >
          <For each={props.variables}>
            {(variable: any, i) => <Ref refId={`stackSlot${id}-${i()}`} />}
          </For>
        </Distribute>
      </Group>
      <Distribute id={`distribute${id}`} direction="vertical" spacing={10}>
        <Ref refId={`label${id}`} />
        <Ref refId={`frameVariables${id}`} />
      </Distribute>
      <Align id={`align2${id}`} alignment="right">
        <Ref refId={`frameVariables${id}`} />
        <Ref refId={`label${id}`} />
      </Align>
    </Group>
  );
}

export default GlobalFrame;
