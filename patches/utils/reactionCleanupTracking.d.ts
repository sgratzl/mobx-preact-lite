import { Ref } from "preact";
import { Reaction } from "mobx";

export interface IReactionTracking {
    /** The Reaction created during first render, which may be leaked */
    reaction: Reaction;
    /**
     * The time (in ticks) at which point we should dispose of the reaction
     * if this component hasn't yet been fully mounted.
     */
    cleanAt: number;
    /**
     * Whether the component has yet completed mounting (for us, whether
     * its useEffect has run)
     */
    mounted?: boolean;
    /**
     * Whether the observables that the component is tracking changed between
     * the first render and the first useEffect.
     */
    changedBeforeMount?: boolean;
}
export declare function createTrackingData(reaction: Reaction): IReactionTracking;
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
export declare const CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
export declare const CLEANUP_TIMER_LOOP_MILLIS = 10000;
export declare function scheduleCleanupOfReactionIfLeaked(ref: Ref<IReactionTracking | null>): void;
export declare function recordReactionAsCommitted(reactionRef: Ref<IReactionTracking | null>): void;
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
export declare function forceCleanupTimerToRunNowForTests(): void;
export declare function resetCleanupScheduleForTests(): void;
