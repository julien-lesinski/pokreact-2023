import { useState } from "react";
import { Button } from "./Button";

export interface PokemonIdInputProps {
  onIdSubmit: (id: number) => void;
}

export function PokemonIdInput(props: PokemonIdInputProps) {
  const [id, setId] = useState<number | undefined>(undefined);

  const submit = () => {
    if (id === undefined || isNaN(id)) return;
    props.onIdSubmit(id);
  };

  return (
    <fieldset
      className="border rounded p-2"
      onKeyDown={(event) => {
        if (["Enter", "NumpadEnter"].includes(event.code)) submit();
      }}
    >
      <legend className="px-1">Enter a pokemon id</legend>
      <div className="flex gap-2">
        <input
          className="rounded px-1"
          type="number"
          min="0"
          max="1010"
          onInput={(event) => setId(event.currentTarget.valueAsNumber)}
        />
        <Button className="border rounded px-1" onClick={submit}>
          Search
        </Button>
      </div>
    </fieldset>
  );
}
