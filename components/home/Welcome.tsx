import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import { Button } from "../common/Button";

export default function Welcome() {
  const router = useRouter();

  return (
    <Card className="m-6 space-y-2">
      <CardHeader>
        <CardTitle className="text-center">
          Welcome to Customer Manager Plus
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-2">
        <Button
          variant="secondary"
          label="Click to Continue..."
          onPress={() => router.push("list-regions")}
        />
        <Button
          label="Clear Storage..."
          variant="destructive"
          onPress={() => {}}
        />
      </CardContent>
    </Card>
  );
}
