export const noneShelfKey = () => (
  "none"
)

export const shelves = () => (
  [
    {
      key: "currentlyReading",
      title: "Currently Reading"
    },
    {
      key: "wantToRead",
      title: "Want to Read"
    },
    {
      key: "read",
      title: "Read"
    },
    {
      key: noneShelfKey(),
      title: "None"
    },
  ]
)

