import Head from "next/head";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Switch,
  Radio,
  RadioGroup,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
function Demo4() {
  return (
    <Select
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={[
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "svelte", label: "Svelte" },
        { value: "vue", label: "Vue" },
      ]}
    />
  );
}
function Demo3() {
  return (
    <RadioGroup
      label="Select your favorite framework/library"
      description="This is anonymous"
      required
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </RadioGroup>
  );
}

function Demo2() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="検索したいワード"
          placeholder="人事異動"
          {...form.getInputProps("email")}
        />

        {/* <Checkbox
          mt="md"
          label=""
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        /> */}

        <Group position="right" mt="md">
          <Button type="submit">検索する</Button>
        </Group>
      </form>
    </Box>
  );
}

const News = () => {
  return (
    <>
      <Head>
        <title>ニュース一覧</title>
      </Head>
      <main className="bg-blue-200 h-screen">
        <div>ニュース一覧</div>
        <Demo />
        <Demo2 />
        <Demo3 />
        <Demo4 />
      </main>
    </>
  );
};
export default News;
