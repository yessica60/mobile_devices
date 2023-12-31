import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import SearchBox from "./components/molecules/SearchBox";
import User from "./components/molecules/User";
import CardList from "./components/organisms/CardList";
import useGitHubData from "./hooks/useGitHubData";
import TextAtom from "./components/atoms/Text";

export default function App() {
  const { data, loading, search } = useGitHubData();

  return (
    <SafeAreaView className="bg-blue-800 flex-1">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        className="h-screen p-4 mx-auto">
        <View>
          <SearchBox onSearch={search} />
          {loading && (
            <TextAtom text="Loading..." key={1}/>
          )}
          {data && (
            <View>
              <User src={data.avatar_url} username={data.login} />
              <CardList data={data} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}