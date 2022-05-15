import { actionSlice } from "./actions.slice";

const { NOTIFICATION } = actionSlice.actions;
export const ACTIONS = {
	ntf:
		(status = undefined, message = undefined, ms = 0) =>
		(dispatch) =>
			dispatch(
				NOTIFICATION({
					status: status,
					message: message,
					ms: ms,
				})
			),
};
