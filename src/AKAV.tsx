import React from 'react';
import {
	ScrollView,
	View,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import {AKAVProps, IStylingProps} from "./types";

const MainView = styled(SafeAreaView)`
	background: ${(props: IStylingProps) => (props.background ? props.background : '#FFFFFF')};
	flex: 1;
`;

const Box = styled(View)`
	padding-left: ${(props: IStylingProps) => props.pl}px;
	padding-right: ${(props: IStylingProps) => props.pr}px;
	flex: 1;
	justify-content: flex-end;
`;

/**
 * Actual Keyboard Avoiding View
 * @param children
 * @param background
 * @param pl
 * @param pr
 * @param needsSTB
 * @param submitButton
 * @param offset
 * @param scrollOffset
 * @param testID
 * @constructor
 */
const AKAV = ({
	children,
	background = '#FFF',
	pl = 20,
	pr = 20,
	needsSTB = false,
	submitButton,
	offset = 100,
	scrollOffset = 0,
	testID = '',
}: AKAVProps) => {
	let sv = React.useRef(null);

	const _keyboardDidShow = () => {
		if (!sv || !sv.current) return;
		if (!needsSTB) return;
		(sv.current as ScrollView).scrollToEnd();
	};

	const keyboardDidShow = () => {
		if (!sv || !sv.current) return;
		if (!scrollOffset) return;
		(sv.current as ScrollView).scrollTo({ x: 0, y: scrollOffset, animated: true });
	};

	React.useEffect(() => {
		if (!scrollOffset) return;
		Keyboard.addListener('keyboardDidShow', keyboardDidShow);
		return () => {
			Keyboard.removeAllListeners('keyboardDidShow');
		};
	}, [scrollOffset]);

	React.useEffect(() => {
		Keyboard.addListener('keyboardWillShow', _keyboardDidShow);

		return () => {
			Keyboard.removeAllListeners('keyboardWillShow');
		};
	}, []);

	return (
		<KeyboardAvoidingView
			style={{
				flex: 1,
				backgroundColor: background,
			}}
			keyboardVerticalOffset={offset}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<MainView testID={testID} background={background}>
				<Box pl={pl} pr={pr}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						keyboardShouldPersistTaps={'handled'}
						ref={sv}
						style={{ height: '100%' }}
					>
						{children}
					</ScrollView>
					{submitButton}
				</Box>
			</MainView>
		</KeyboardAvoidingView>
	);
};

export { AKAV };
