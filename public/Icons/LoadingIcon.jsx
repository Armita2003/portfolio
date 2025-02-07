import { Stack } from "@mui/material";

export function LoadingIcon() {
    return (
        <Stack
            position="absolute"
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(255, 255, 255, 0.8)" // Optional: Light background to make it visible
            zIndex={1}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <img src="https://s3-alpha-sig.figma.com/img/e17c/7e77/07b8ac2893283d23a9b18b1ecfb3faed?Expires=1739750400&amp;Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&amp;Signature=gRnj8~gOaRhaj0yDAcX0hc9BTWNGWHYS3EepYwHWlWvmoWlTvftj4WC2GQLmBoc~xSY8OWUfy9GV9VYidWvrHX9-HQbwCARyMqi29od~oM48S4LgY~H3UICdR6Qmf2s3TepDsY4Y24YFdgIU2njCSh83aJFL-BcmkieTDKJnW7-EtCl~2d2qBFmY7brGyciH9jLM03yjKZsqbv1GdON~p~UGR7qvRVaBkm-GuFEZPUFSESyqo6I35cdKOblbq6NUawJHeCJQIDgIaJTRImEJIA43sply-RU7-zc7c2pHMnNgsYT6j4rpu5vfKj5sOcliVaKd1wOrze5tf74w82pGVQ__" />
            </div>
        </Stack>
    );
}
