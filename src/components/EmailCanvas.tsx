import React from 'react';
import { EmailBlock } from '../types';
import BlockPreview from './BlockPreview';
import EmptyState from './EmptyState';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

interface EmailCanvasProps {
  blocks: EmailBlock[];
  selectedBlockId: string | null;
  onSelectBlock: (blockId: string) => void;
  onDeleteBlock: (blockId: string) => void;
  onReorderBlocks: (blocks: EmailBlock[]) => void;
}

const EmailCanvas: React.FC<EmailCanvasProps> = ({
  blocks,
  selectedBlockId,
  onSelectBlock,
  onDeleteBlock,
  onReorderBlocks,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex((block) => block.id === active.id);
      const newIndex = blocks.findIndex((block) => block.id === over.id);
      onReorderBlocks(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  if (blocks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-1 py-1 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-500">Email Preview</div>
        <div className="w-14"></div>
      </div>
      
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={blocks.map(block => block.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="divide-y divide-gray-100">
            {blocks.map((block) => (
              <SortableItem key={block.id} id={block.id}>
                <div 
                  className={`relative ${selectedBlockId === block.id ? 'ring-2 ring-purple-500' : ''}`}
                  onClick={() => onSelectBlock(block.id)}
                >
                  <BlockPreview 
                    block={block} 
                    isSelected={selectedBlockId === block.id}
                    onDelete={() => onDeleteBlock(block.id)}
                  />
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default EmailCanvas;