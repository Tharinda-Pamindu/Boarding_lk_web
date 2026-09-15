import { createFileRoute } from "@tanstack/react-router";
import { UniversityHubsPage } from "./university-hubs";

export const Route = createFileRoute("/districts")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Boarding by District | Colombo, Gampaha, Kandy & Galle | boarding.lk" },
      {
        name: "description",
        content:
          "Browse verified boarding rooms, annexes and houses district by district across Sri Lanka, with direct landlord contacts.",
      },
      { property: "og:title", content: "Boarding by District in Sri Lanka | boarding.lk" },
      {
        property: "og:description",
        content: "District-wise directory of verified student bodim, annexes and houses.",
      },
    ],
  }),
});

function Page() {
  return <UniversityHubsPage />;
}
